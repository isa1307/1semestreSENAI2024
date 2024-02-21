import React from 'react';
import { View, Text, Image } from 'react-native';


const ProjectItem = ({ projeto }) => {
    const projetos = [
        {
          id: 1,
          nome: "Projeto 1",
          explicacao: "O objetivo do projeto era criar um aplicativo simples que permite ao usuário adicionar novas tarefas, visualizá-las em uma lista e remover tarefas da lista. ",
          tecnologias: " VsCode, React Native e Tailwind. ",
          image: require('./assets/projeto1.jpg'),
        }
      ];
    
  return (
    <View key={projeto.id}>
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
  );
};

export default ProjectItem;
