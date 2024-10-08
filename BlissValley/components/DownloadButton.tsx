import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { View } from 'react-native';
import { Platform, TouchableOpacity, Text } from 'react-native';


const DownloadButton = () => {

async function download() {
  const filename = "recipe.pdf";
  const result = await FileSystem.downloadAsync(
    // Provide the URL of the file to download
    'recipe.pdf',
    FileSystem.documentDirectory + filename
  );

  // Log the download result
  console.log(result);

  async function saveFile(uri : string, filename : string, mimetype : any) {
    if (Platform.OS === "android") {
      const permissions = await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
  
      if (permissions.granted) {
        const base64 = await FileSystem.readAsStringAsync(uri, { encoding: FileSystem.EncodingType.Base64 });
  
        await FileSystem.StorageAccessFramework.createFileAsync(permissions.directoryUri, filename, mimetype)
          .then(async (uri) => {
            await FileSystem.writeAsStringAsync(uri, base64, { encoding: FileSystem.EncodingType.Base64 });
          })
          .catch(e => console.log(e));
      } else {
        Sharing.shareAsync(uri);
      }
    } else {
      Sharing.shareAsync(uri);
    }
  }

  // Save the downloaded file
  saveFile(result.uri, filename, result.headers["Content-Type"]);

}

return (
  <View>
    <TouchableOpacity onPress={download}>
        <Text>Download</Text>
    </TouchableOpacity>
  </View>
);
}

export default DownloadButton;