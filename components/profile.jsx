import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';

const UserProfile = () => {
  const openGithub = () => {
    Linking.openURL('https://github.com/isa1307');
  };

  const openLinkedIn = () => {
    Linking.openURL('https://www.linkedin.com/in/isabela-oliveira-de-souza-5b8b212b1/');
  };

  return (
    <View>
      <Text className='p-4 text-white text-2xl font-semibold'>Isabela Oliveira de Souza</Text>
      <Text className='p-4 text-white text-sm'>
        Estudante de Análise de Sistemas | Curso Técnico em Análise de Sistemas (3º semestre)
      </Text>
      
      <View className='flex-row'>
        <TouchableOpacity onPress={openGithub}>
          <Image className='w-10 h-10 rounded-full m-4 border-2' source={require('../assets/icongh.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={openLinkedIn}>
          <Image className='w-10 h-10 rounded m-4 border-2' source={require('../assets/linkedin.png')} />
        </TouchableOpacity>
      </View>

      <View className='border-2'></View>
      
      <View className='bg-red-50 h-full' >
        <Text className='p-6 text-sm'>
          Olá! Sou Isabela, estudante de Desenvolvimento de Sistemas no SENAI, apaixonada por tecnologia e em constante busca por aprendizado. Meus projetos refletem meu compromisso com o desenvolvimento de soluções inovadoras. Bem-vindo ao meu portfólio!
        </Text>
      </View>
    </View>
  );
};

export default UserProfile;
