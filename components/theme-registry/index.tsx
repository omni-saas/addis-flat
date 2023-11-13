"use client";

import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "./theme";
import { SettingsConsumer, SettingsProvider } from "@/context/setting-context" 
import CustomProvider from "@/redux/provider";


export default function ThemeRegistry( { children }: { children: React.ReactNode },) {
  
  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CustomProvider>
            <SettingsProvider>
                <SettingsConsumer>
                  {({ settings }) => (
                    <ThemeProvider
                      theme={createTheme({
                        mode: settings.theme,
                      })}
                    >
                      <CssBaseline  />
                      {children}
                  </ThemeProvider>
                )}
                </SettingsConsumer>
            </SettingsProvider>
          </CustomProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
