import React from "react";
import {
    SectionList,
    Text,
    View,
    SafeAreaView,
    StyleSheet
  } from "react-native";
  
  const styles = StyleSheet.create({
    row: {
      paddingHorizontal: 10,
      paddingVertical: 10,
    },
    name: {
      fontSize: 16,
    },
    separator: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      height: 1,  
    },
    sectionHeader: {
      backgroundColor: "rgba(170, 170, 170)",
      paddingVertical: 10,
      paddingHorizontal: 10,
    },
  });
  
  const groupPeopleByLastName = (_data) => {
    const data =[..._data];
    const groupedData = data.reduce((accumulator, item) => {
      const group = item.name.last[0].toUpperCase();
      if (accumulator[group]) {
        accumulator[group].push(item);
      } else {
        accumulator[group] ={
            title: group,
            data: [item],
        };
      }
      
      return accumulator;
    }, {});
    
    const sections = Object.keys(groupedData).map((key) => {
      return groupedData[key];
    });
    
    return sections.sort((a, b) => {
      if (a.title > b.title) {
        return 1;
      }
        return -1;
     
    });
  };
const Bai8Component = () => {
    return(
        <SafeAreaView style={{marginTop:40}}>
            <SectionList
                sections={groupPeopleByLastName(PEOPLE)}
                keyExtractor={(item) => `${item.name.first}-${item.name.last}`}
                renderSectionHeader={({section}) =>{
                    return(
                        <View style={styles.sectionHeader}>
                            <Text>{section.title}</Text>
                        </View>
                    )
                }}
                renderItem={({item}) => {
                    return(
                        <View style={styles.row}>
                            <Text style={styles.name}>
                                {item.name.first} {item.name.last}
                            </Text>
                        </View>
                    )
                }}
                ItemSeparatorComponent={()=><View style={styles.separator}/>}
            />
        </SafeAreaView>
    )
}
const PEOPLE = [
    {
        name:{
            title: "Ms",
            first: "Maeva",
            last: "Scott",
        }
    },
    {
        name:{
            title: "Ms",
            first: "Maelle",
            last: "Henry",
        }
    },
    {
        name:{
            title: "Mr",
            first: "Mohamoud",
            last: "Faaij",
        }
    }
]
export default Bai8Component;