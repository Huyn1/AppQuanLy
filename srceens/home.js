import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';

const tabs = ['Tất cả', 'Tầng 2', 'Tầng 10', 'VIP'];

const data = {
  'Tầng 2': [
    { name: 'EDITTED NAME', time: '1 tháng 4 ngày', price: 0, printer: true },
    { name: 'PHÒNG A', time: '2 ngày 19 giờ', price: 50000 },
    { name: 'TEST PHÒNG M...', time: '6 ngày 15 giờ', price: 50000 },
    { name: 'TEST PHÒNG...', time: '2 tháng 1 ngày', price: 75000, printer: true },
  ],
  'Tầng 10': [
    { name: 'PHÒNG TẦNG 10', time: '2 tháng 5 ngày', price: 295000 },
    { name: 'PHÒNG VVIP' },
    { name: 'PHÒNG B', time: '4 ngày', price: 33000 },
    { name: 'PHÒNG B 2', time: '2 ngày 19 giờ', price: 325000 },
    { name: 'PHÒNG B 4', time: '1 tháng 6 ngày', price: 99000 },
  ],
  VIP: [
    { name: 'PHÒNG BÀN VIP' },
    { name: 'BÀN VIP 1', time: '1 tháng 4 ngày', price: 11301104 },
    { name: 'BÀN VIP 2', time: '3 ngày 10 giờ', price: 50000, printer: true },
  ],
};

const RoomItem = ({ room }) => {
  const isEmpty = !room.time;
  const containerStyle = [
    styles.roomCard,
    isEmpty
      ? styles.emptyRoom
      : room.printer
      ? styles.greenRoom
      : styles.blueRoom,
  ];

  return (
    <View style={containerStyle}>
      <Text style={styles.roomName}>{room.name}</Text>
      {!isEmpty ? (
        <>
          <Text style={styles.roomText}>🕒 {room.time}</Text>
          <Text style={styles.roomText}>💵 {room.price.toLocaleString()}</Text>
          {room.printer && <Text style={styles.roomText}>🖨 Có máy in</Text>}
        </>
      ) : (
        <Text style={styles.roomText}>Sẵn sàng</Text>
      )}
    </View>
  );
};

const Home = () => {
  const [currentTab, setCurrentTab] = useState('Tất cả');

  const roomsToDisplay =
    currentTab === 'Tất cả'
      ? Object.entries(data).flatMap(([floor, rooms]) =>
          rooms.map(room => ({ ...room, section: floor })),
        )
      : data[currentTab]?.map(room => ({ ...room, section: currentTab }));

  const renderHeader = () => (
    <View>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.money}>💰 Tạm tính: 15,571,365.25</Text>
          <Text style={styles.inUse}>☕ Đang dùng: 20/88</Text>
        </View>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterText}>Lọc</Text>
        </TouchableOpacity>
      </View>

      {/* Tabs */}
      <View style={styles.tabContainer}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setCurrentTab(tab)}
            style={[
              styles.tab,
              currentTab === tab && styles.tabSelected,
            ]}>
            <Text
              style={[
                styles.tabText,
                currentTab === tab && styles.tabTextSelected,
              ]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );

  return (
    <FlatList
      data={roomsToDisplay}
      keyExtractor={(item, index) => item.name + index}
      numColumns={2}
      columnWrapperStyle={styles.row}
      contentContainerStyle={styles.listContent}
      ListHeaderComponent={renderHeader}
      renderItem={({ item }) => <RoomItem room={item} />}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  money: { color: '#f97316', fontWeight: 'bold', marginBottom: 4 },
  inUse: { color: '#f97316', fontWeight: 'bold' },
  filterBtn: {
    backgroundColor: '#3b82f6',
    borderRadius: 999,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  filterText: { color: 'white', fontWeight: 'bold' },

  tabContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#e5e7eb',
    borderRadius: 999,
    marginRight: 8,
    marginBottom: 8,
  },
  tabSelected: { backgroundColor: '#3b82f6' },
  tabText: { fontWeight: '600', color: '#000' },
  tabTextSelected: { color: '#fff' },

  listContent: { paddingBottom: 100, paddingHorizontal: 16 },
  row: { justifyContent: 'space-between', marginBottom: 12 },

  roomCard: {
    flex: 1,
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 4,
    minHeight: 100,
    justifyContent: 'center',
  },
  roomName: { fontWeight: 'bold', fontSize: 14, marginBottom: 4, color: '#fff' },
  roomText: { fontSize: 12, color: '#fff' },

  blueRoom: { backgroundColor: '#3b82f6' },
  greenRoom: { backgroundColor: '#22c55e' },
  emptyRoom: {
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#fff',
  },
});

export default Home;
