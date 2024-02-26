import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Share from '../screen/home/Share';
import Send from '../screen/home/Send';
import Colors from '../constants/Colors';
import FloatingButton from '../components/button/FloatingButton';

const TopTabNavigator = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('Share');

  const handlePress = () => {
    navigation.navigate('NewTopicPage');
  };

  const renderComponent = () => {
    switch (activeTab) {
      case 'Share':
        return <Share />;
      case 'Send':
        return <Send />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => {
            setActiveTab('Share');
            console.log('Share');
          }}>
          <View style={styles.tabContentContainer}>
            <Text style={styles.tabText}>Share</Text>
            {activeTab === 'Share' && (
              <View style={styles.activeTabIndicator} />
            )}
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab('Send')}>
          <View style={styles.tabContentContainer}>
            <Text style={styles.tabText}>Send</Text>
            {activeTab === 'Send' && <View style={styles.activeTabIndicator} />}
          </View>
        </TouchableOpacity>
      </View>
      {renderComponent()}
      <FloatingButton onPress={handlePress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomColor: Colors.grey,
  },
  tabContentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeTabIndicator: {
    position: 'absolute',
    height: 3,
    width: '80%',
    backgroundColor: Colors.green,
    bottom: 0,
    top: 36,
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: Colors.green,
  },
  tabText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
  },
});

export default TopTabNavigator;
