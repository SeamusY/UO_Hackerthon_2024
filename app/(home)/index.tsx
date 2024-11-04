import { View, Image } from "react-native";
import { useRouter } from "expo-router";
import Onboarding from "react-native-onboarding-swiper";
export default function HomeLanding() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <View style={{ alignSelf: "center", backgroundColor: "green" }}>
        <Onboarding
          pages={[
            {
              image: (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
                  }}
                />
              ),
              backgroundColor: "#fff",
              title: "Welcome",
              subtitle: "We are happy to see you on the WeeFly app",
            },
            {
              image: (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
                  }}
                />
              ),
              backgroundColor: "#fff",
              title: "How to navigate",
              subtitle: "Please allow permissions for the camera to enable QR code scanner",
            },
            {
              image: (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
                  }}
                />
              ),
              backgroundColor: "#fff",
              title: "Allow Camera",
              subtitle: "Please allow permissions for the camera to enable QR code scanner",
            },
            {
              image: (
                <Image
                  style={{ width: 200, height: 200 }}
                  source={{
                    uri: "https://www.searchenginejournal.com/wp-content/uploads/2019/07/the-essential-guide-to-using-images-legally-online.png",
                  }}
                />
              ),
              backgroundColor: "#fff",
              title: "Enjoy",
              subtitle: "Click Next To Start Scanning",
            },
          ]}
          onDone={() => {
            router.push("./(home)/qrCodeScanner");
          }}
        />
      </View>
    </View>
  );
}
