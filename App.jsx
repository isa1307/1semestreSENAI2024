//importacoes
import { StyleSheet, Text, View, Image, ScrollView, ImageBackground } from 'react-native';
import { StatusBar } from "expo-status-bar";
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Linking } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';



// Funcao principal
export default function App() {
  // Array de projetos
  const projetos = [
    {
      id: 1,
      nome: "Lista de Tarefas",
      explicacao: "O objetivo do projeto era criar um aplicativo simples que permite ao usuário adicionar novas tarefas, visualizá-las em uma lista e remover tarefas da lista. ",
      tecnologias: " VsCode, React Native e Tailwind. ",
      image: require('./assets/projeto1.jpg'),
    },
    {
      id: 2,
      nome: "ROYALEOC",
      explicacao: "Criar uma API com informações sobre os personagens e cartas do jogo Clash Royale, ",
      tecnologias: " VsCode, React.js e GitHub. ",
      image: require('./assets/octoroyale.png'),
    },
    {
      id: 3,
      nome: "OctoPlay",
      explicacao: "Consumir uma API da nossa preferência e utilizar os dados para criar um site.",
      tecnologias: " VsCode, React.js e GitHub. ",
      image: require('./assets/octoplay.jpg'),
    }

  ]
  return (
    // View principal
    <View className='bg-red-800 w-full flex flex-1 '>




      <Image className='w-36 h-36 rounded-full m-6 mt-12 border-2' source={require('./assets/isabela2.jpg')} />

      <Text className='p-4 text-white text-2xl font-semibold'>Isabela Oliveira de Souza</Text>
      <Text className='p-4 text-white text-sm'>
        Estudante de Análise de Sistemas | Curso Técnico em Análise de Sistemas (3º semestre)
      </Text>
      {/* View com os links para o github e linkedin */}
      <View className='flex-row'>
        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/isa1307')}>
          <Image className='w-10 h-10 rounded-full m-4 border-2' source={require('./assets/icongh.png')} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/isabela-oliveira-de-souza-5b8b212b1/')}>
          <Image className='w-10 h-10 rounded m-4 border-2' source={require('./assets/linkedin.png')} />
        </TouchableOpacity>
      </View>

      <View className='border-2'></View>
      <View className='bg-red-50 h-full' >

        {/* View com os projetos */}

        {/* Scrollview com os projetos */}
        <ScrollView className='mt-100'
          showsVerticalScrollIndicator={false}  >
          <Text className='p-6 text-sm'>
            Olá! Sou Isabela, estudante de Desenvolvimento de Sistemas no SENAI, apaixonada por tecnologia e em constante busca por aprendizado. Meus projetos refletem meu compromisso com o desenvolvimento de soluções inovadoras. Bem-vindo ao meu portfólio!
          </Text>
          {/* View com as tecnologias utilizadas */}
          <View >
            <Text className='m-auto font-semibold  text-lg text-red-800	' >Tecnologias Utilizadas</Text>
            <View className='flex-row justify-around p-6 justify-between'>
              <TouchableOpacity onPress={() => Linking.openURL('https://github.com')}>
                <AntDesign name="github" size={24} color="black"  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://reactjs.org')}>
                <FontAwesome5 name="react" size={24} color="black"  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://tailwindcss.com')}>
                <MaterialCommunityIcons name="tailwind" size={24} color="black"  />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Linking.openURL('https://nodejs.org')}>
                <FontAwesome5 name="node-js" size={24} color="black"  />
              </TouchableOpacity>
            </View>
          </View>
          <Text className='p-3 font-extrabold m-auto text-red-800 text-3xl '>Meus Projetos</Text>
          {
            projetos.map((projeto) => (
              <View className='border-2 border-x-red-700 border-y-red-700 w-64 m-auto mb-10 rounded' key={projeto.id}>
                <Text className='text-xl font-extrabold p-4'>
                  {projeto.nome}
                </Text>
                <Text className='text-sm p-4'>{projeto.explicacao}</Text>
                <Text className='text-base font-semibold p-4'>Tecnologias utilizadas:</Text>
                <Text className='p-2'>   {projeto.tecnologias}</Text>
                <View className='p-16 m-auto'>
                  <Image style={{ width: 120, height: 240 }} source={projeto.image}></Image>
                </View>
              </View>
            ))
          }

        </ScrollView>

      </View>
      <StatusBar style="auto" />

    </View>


  );

}