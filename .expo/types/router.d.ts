/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(home)` | `/(home)/` | `/(home)/qrCodeScanner` | `/(tabs)` | `/(tabs)/` | `/(tabs)/explore` | `/_sitemap` | `/explore` | `/qrCodeScanner`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
