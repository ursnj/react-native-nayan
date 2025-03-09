# react-native-nayan

React Native Component Library for smooth and faster mobile application development.

## ✨ Features
- 🌈 Enterprise-class UI designed for mobile applications.
- 📦 A set of high-quality React native components out of the box.
- 🛡 Written in TypeScript with predictable static types.
- ⚙️ Whole package of design resources and development tools.
- 🎨 Powerful theme customization based on Tailwind and Nativewind.

## 🔨 Installation

```sh
npm install react-native-nayan
```

## 🕹 Usage

Follow Nativewind installation as per the [nativewind](https://www.nativewind.dev/getting-started/installation) documentation.

Change tailwind.config.ts as bellow

```typescript
const { hairlineWidth } = require('nativewind/theme');
const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    '../src/**/*.{js,jsx,ts,tsx}'
  ],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      ...colors,
      primary: 'var(--color-primary)',
      card: 'var(--color-card)',
      text: 'var(--color-text)',
      muted: 'var(--color-muted)',
      border: 'var(--color-border)',
      background: 'var(--color-background)'
    },
    extend: {
      borderWidth: {
        hairline: hairlineWidth()
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: []
};
```

Create theme colors constant with your choice of colors

```typescript
import { DarkTheme, DefaultTheme } from '@react-navigation/native';

export const themeColors = {
  light: {
    ...DefaultTheme,
    colors: {
      primary: 'hsl(215 100% 45%)',
      background: 'hsl(216 20% 95%)',
      card: 'hsl(0 0% 100%)',
      text: 'hsl(0 0% 2%)',
      muted: 'hsl(0 0% 50%)',
      border: 'hsl(0 0% 88%)',
      notification: 'hsl(0 0% 100%)'
    }
  },
  dark: {
    ...DarkTheme,
    colors: {
      primary: 'hsl(209 100% 58%)',
      background: 'hsl(0 0% 12%)',
      card: 'hsl(0 0% 21%)',
      text: 'hsl(0 0% 96%)',
      muted: 'hsl(0 0% 69%)',
      border: 'hsl(0 0% 31%)',
      notification: 'hsl(0 0% 21%)'
    }
  }
};
```

Change your app starting file as bellow

```tsx
import '../global.css';
import 'react-native-reanimated';
import { NText, NPress, NTheme, useColorScheme } from 'react-native-nayan';
import { View } from 'react-native';
import { themeColors } from './constants';

export default function App() {
  const {colorScheme, setColorScheme} = useColorScheme();

  const chnageTheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <NTheme theme={colorScheme} themeColors={themeColors}>
      <View className="flex-1 justify-center items-center">
        <NPress onPress={chnageTheme}>
          <NText className="text-text text-xl mt-3">Change Theme</NText>
        </NPress>
      </View>
    </NTheme>
  );
}
```

## 🤝 Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.
