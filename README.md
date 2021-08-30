# Plant Manager APP

## IMPORTANTE

- ``npm install --global expo-cli``
- Para criar o projeto, vá até uma pasta qualquer e digite ``expo init plant-manager``. Isto irá criar uma pasta com todo o conteúdo necessário para o projeto. Ao aparecer a opção de template, selecionar **blank (TypeScript)**
- Para iniciar o projeto, digite ``expo start``
- Para testar no smartphone, baixar o applicativo **Expo**
- Para páginas, criar pasta ``pages`` na raiz
  - Os arquivos das páginas têm extensão ``.tsx``
- Criar arquivo ``custom.d.ts`` na raiz e definir da seguinte forma:
~~~ts
declare module '*.png' {
    const content: any;
    export default content;
}
~~~
- Para criar componentes, criar pasta ``components``
  - Os arquivos dos componentes têm extensão ``.tsx``
- Instalar ``vector-icons`` do ``expo``: ``expo install @expo/vector-icons``
  - Para mais informações, ver [Expo Icons](docs.expo.io/guides/icons/ "Documentação Expo Icons")
- Verificar as fontes utlizadas no site [Google Fonts](fonts.google.com/ "Google Fonts")
  - Instalar Expo Google Fonts: ``expo install expo-font @expo-google-fonts/[NOME DA FONTE]``
- Instalar ``expo-app-loading``: ``expo install expo-app-loading``
- Instalar [React Navigation](reactnavigation.org/docs/getting-started/ "Documentação React Navigation"): ``npm install @react-navigation/native``
- Instalar dependências do React Navigation
  - ``expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view``
  - ``npm install @react-navigation/stack``
- Instalar o [Iphone X Helper](github.com/ptelad/react-native-iphone-x-helper "Documentação Iphone X Helper"): ``npm i react-native-iphone-x-helper --save``
- Cria pasta ``services`` e colocar o arquivo ``server.json``
  - Instalar o Axios: ``npm install axios``
  - Criar arquivo ``api.ts`` nesta pasta e desta forma:
~~~ts
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://[IP DA MÁQUINA]:3333'
});

export default api;
~~~
  - Instalar o [JSON Server](github.com/typicode/json-server "Documentação JSON Server"): ``npm install -g json-server``
    - Para rodar: ``json-server ./src/services/server.json --host 192.168.0.158 --port 3333 --delay 800``
- Instalar o [SVG](docs.expo.io/versions/latest/sdk/svg/ "Documentação SVG"): ``expo install react-native-svg``
- Baixar uma [animação Lottie](lottiefiles.com/featured)
  - Buscar a animação apropriada, baixar o json e colocar na pasta ``src/assets``
  - Instalar o [Lottie](docs.expo.io/versions/latest/sdk/lottie "Documentação Lottie"): ``expo install lottie-react-native``
- Instalar o [Async Storage](docs.expo.io/versions/latest/sdk/async-storage/ "Documentação Async Storage"): ``expo install @react-native-async-storage/async-storage``
- Instalar o [DateTimePicker](docs.expo.io/versions/latest/sdk/date-time-picker/ "Documentação Date Time Picker"): ``expo install @react-native-community/datetimepicker``
  - Obs: ele funciona de forma diferente para iOS e Android
- Instalar o [Date FNS](date-fns.org/docs/Getting-Started/ "Documentação Date FNS"): ``npm install date-fns --save``
- Instalar o [Tab navigation](reactnavigation.org/docs/tab-based-navigation/ "Documentação TabNnavigation"): ``npm install @react-navigation/bottom-tabs``
  - Caso não funcione acima, utilizar a versão 5.x: ``npm install @react-navigation/bottom-tabs@^5.x``