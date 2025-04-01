import {View} from 'react-native';
import { NAccordion } from 'react-native-nayan';

const Component = () => {
  const items = [
    {title: 'How does the video creation process work on Inyter.com?', description: 'Inyter.com simplifies the video creation process. You start by choosing a template that fits your occasion, then customize it by adding your photos, videos, and personalized messages. Once you\'re happy with the design, Inyter generates the video and allows you to send it directly to your loved ones via platforms like WhatsApp, or save it for future use.'},
    {title: 'Why does Inyter.com charge money?', description: 'Inyter.com is free to use with minor limitations, allowing you to create personalized video invitations and wishes at no cost. However, we charge a nominal fee for HD content because generating high-quality videos requires powerful servers and significant resources. Video generation is a costly process that involves heavy server usage, and these fees help us maintain the quality and performance of the platform while ensuring smooth and reliable service for all users.'}
  ];

  return (
    <View className="flex-1 p-3">
      <NAccordion items={items} className="" itemClassName="border border-border rounded bg-card mb-3" titleClassName="text-text" descriptionClassName="text-muted" />
    </View>
  )
};

export default Component;
