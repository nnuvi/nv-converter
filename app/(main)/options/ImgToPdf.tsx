import React, { useState } from "react";
import {
  Alert,
  Button,
  Image,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Print from "expo-print";
import { createPdf } from "react-native-pdf-from-image";
import * as Sharing from "expo-sharing";
import DraggableFlatList, {
  RenderItemParams,
} from "react-native-draggable-flatlist";

export default function ImageToPdf() {
  const [images, setImages] = useState<{ uri: string; key: string }[]>([]);

  const pickImages = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission required to access images.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      quality: 1,
      selectionLimit: Platform.OS === "android" ? 30 : 20,
    });

    if (!result.canceled) {
      const uris = result.assets.map((asset, idx) => ({
        uri: asset.uri,
        key: `${asset.uri}-${idx}`,
      }));
      setImages(uris);
    }
  };

  const convertToPdf = async () => {
    const { filePath } = createPdf({
      imagePaths: images,
      name: "myPdf",
      paperSize: "A4", // optional
      // optional
      customPaperSize: {
        height: 300,
        width: 300,
      },
    });
    // if (images.length === 0) {
    //   Alert.alert('Please select at least one image.');
    //   return;
    // }

    // const htmlContent = `
    //   <html>
    //     <body style="margin:0;padding:0;">
    //       ${images
    //         .map(
    //           (img) =>
    //             `<img src="${img.uri}" style="width:100%;margin-bottom:20px;" />`
    //         )
    //         .join('')}
    //     </body>
    //   </html>
    // `;

    // try {
    //   const { uri } = await Print.printToFileAsync({
    //     html: htmlContent,
    //     base64: false,
    //   });

    //   if (await Sharing.isAvailableAsync()) {
    //     await Sharing.shareAsync(uri);
    //   } else {
    //     Alert.alert('PDF created at', uri);
    //   }
    // } catch (error) {
    //   Alert.alert('Error creating PDF', (error as any)?.message || '');
    // }
  };

  const renderItem = ({
    item,
    drag,
    isActive,
  }: RenderItemParams<{ uri: string; key: string }>) => (
    <TouchableOpacity
      onLongPress={drag}
      activeOpacity={0.9}
      style={{ marginBottom: 10 }}
    >
      <Image
        source={{ uri: item.uri }}
        style={{
          width: "100%",
          height: 200,
          opacity: isActive ? 0.8 : 1,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <Button title="Pick Images" onPress={pickImages} />
      <View style={{ height: 20 }} />
      <Button title="Convert to PDF" onPress={convertToPdf} color="#4CAF50" />
      <View style={{ height: 20 }} />
      <DraggableFlatList
        data={images}
        onDragEnd={({ data }) => setImages(data)}
        keyExtractor={(item) => item.key}
        renderItem={renderItem}
      />
    </ScrollView>
  );
}
