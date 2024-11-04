import { View, Text, Button } from "react-native";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useEffect } from "react";
import { get } from "react-native/Libraries/TurboModule/TurboModuleRegistry";

export default function QrCodeScanner() {
  const [permission, getPermissions] = useCameraPermissions();

  if (!permission?.granted) {
    getPermissions();
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View style={{ alignSelf: "center" }}>
        {!permission?.granted ? (
          <CameraView barcodeScannerSettings={{ barcodeTypes: ["qr"] }} />
        ) : (
          <View>
            <Text> Please Enable Camera</Text>
            <Button
              onPress={() => {
                getPermissions();
              }}
              title="Enable Camera"
            />
          </View>
        )}
      </View>
    </View>
  );
}
