import React from 'react'
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer'
import { PDFDownloadLink, PDFViewer } from '@react-pdf/renderer'

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000', // Đặt màu nền của trang PDF thành đen
    padding: 20
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#ffffff' // Đặt màu chữ cho tiêu đề thành trắng
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#ffffff' // Đặt màu chữ cho chữ ký thành trắng
  }
})

class ChartReport extends React.Component {
  render() {
    const pdfContent = (
      <Document>
        <Page size='A4' style={styles.page}>
          <Text style={styles.title}>Report Product</Text>
          <View style={{ width: '80%' }}>
            <MyChart />
          </View>
          <Text style={styles.footer}>Kí tên: ____________________</Text>
        </Page>
      </Document>
    )

    return (
      <div>
        <PDFViewer style={{ width: '100%', height: '500px' }}>{pdfContent}</PDFViewer>
        <button onClick={() => {}}>
          <PDFDownloadLink document={pdfContent} fileName='chart_report.pdf'>
            {({ blob, url, loading, error }) => (loading ? 'Generating PDF...' : 'Download PDF')}
          </PDFDownloadLink>
        </button>
      </div>
    )
  }
}

export default ChartReport
