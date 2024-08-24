"use client"

import React, { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  width?: string;
  height?: number;
  defaultColumn?: string;
  screener_type?: string;
  displayCurrency?: string;
  colorTheme?: string;
  locale?: string;
}

export default function TradingViewWidget({
  width = "100%",
  height = 550,
  defaultColumn = "overview",
  screener_type = "crypto_mkt",
  displayCurrency = "USD",
  colorTheme = "dark",
  locale = "en"
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-screener.js";
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = JSON.stringify({
      width,
      height,
      defaultColumn,
      screener_type,
      displayCurrency,
      colorTheme,
      locale
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        const scriptElement = containerRef.current.querySelector('script');
        if (scriptElement) {
          containerRef.current.removeChild(scriptElement);
        }
      }
    };
  }, [width, height, defaultColumn, screener_type, displayCurrency, colorTheme, locale]);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}