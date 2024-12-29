# SnapToScroll

Demo project for RNTV issue https://github.com/react-native-tvos/react-native-tvos/issues/848 .

## 🚀 How to use

- `cd` into the project

```sh
yarn
yarn android # Build for Android TV
```

The project has the Android directory already generated and checked into source. The `android/settings.gradle` file is modified to build the RNTV Android native code from source.

Experimental changes to try out possible solutions are in `patches/react-native+0.76.5-0.patch`.
