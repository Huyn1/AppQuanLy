import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>An Nhiên's Care</Text>
        <Text style={styles.subtitle}>Admin</Text>
        <Text style={styles.subtitle}>KARAOKE HOA MI 4</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => props.navigation.navigate('Login')}>
          <Text style={styles.logoutText}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      <DrawerItemList {...props} />
      <ScrollView style={{ marginTop: 20 }}>
        {[
          'Đồng bộ dữ liệu',
          'Thu ngân',
          'Tổng quan',
          'Quản lý đơn hàng',
          'Phòng bàn',
          'Quản lý hàng hóa',
          'Đối tác',
          'Khuyến mãi',
          'Quản lý nhân viên',
          'Báo cáo',
          'Thiết lập',
          'Hỗ trợ',
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <Text style={styles.menuText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Text style={styles.footer}>Phiên bản 1.5.6</Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: { padding: 16, borderBottomWidth: 1, borderColor: '#eee' },
  title: { fontWeight: 'bold', fontSize: 18 },
  subtitle: { color: '#888', marginTop: 2 },
  logoutBtn: { marginTop: 10, backgroundColor: '#f97316', padding: 8, borderRadius: 6 },
  logoutText: { color: '#fff', textAlign: 'center' },
  menuItem: { marginVertical: 10 },
  menuText: { fontSize: 16 },
  footer: { marginTop: 30, fontSize: 12, color: '#999' },
});