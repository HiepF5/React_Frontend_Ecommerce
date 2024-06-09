import React from 'react'
import { Document, Page, Text, View, StyleSheet, PDFViewer } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  },
  table: {
    width: '80%',
    marginVertical: 30,
    borderWidth: 1,
    borderColor: '#000000'
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000000',
    height: 30
  },
  cell: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 30,
    right: 30,
    textAlign: 'center'
  }
})

const Report = ({ productsList }) => (
  <Document>
    <Page size='A4' style={styles.page}>
      <Text style={styles.title}>Report Product</Text>
      <View style={styles.table}>
        <View style={styles.row}>
          <View style={[styles.cell, { borderRightWidth: 1 }]}>
            <Text>ID</Text>
          </View>
          <View style={[styles.cell, { borderRightWidth: 1 }]}>
            <Text>Name</Text>
          </View>
          <View style={styles.cell}>
            <Text>Price</Text>
          </View>
        </View>
        {productsList.map((item, index) => (
          <View key={index} style={styles.row}>
            <View style={[styles.cell, { borderRightWidth: 1 }]}>
              <Text>{item.productsId}</Text>
            </View>
            <View style={[styles.cell, { borderRightWidth: 1 }]}>
              <Text>{item.price}</Text>
            </View>
            <View style={styles.cell}>
              <Text>{item.productsName}</Text>
            </View>
          </View>
        ))}
      </View>
      <Text style={styles.footer}>Kí tên: ____________________</Text>
    </Page>
  </Document>
)

export default Report
