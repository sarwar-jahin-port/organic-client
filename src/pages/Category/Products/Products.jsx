import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'; // Import components from the library
import 'react-tabs/style/react-tabs.css'; // Import the default CSS styles
import { ProductShowCase } from '../../Home/ProductShowCase/ProductShowCase';

const Products = ({index}) => {
  return (
    <Tabs defaultIndex={index}>
      {/* TabList contains the tab titles */}
      <TabList>
        <Tab>Vegetable Seeds</Tab>
        <Tab>Flower Seeds</Tab>
        <Tab>Garden Tools</Tab>
        <Tab>Fertilizer</Tab>
        <Tab>Pesticides</Tab>
        <Tab>Tub</Tab>
        <Tab>Soil & Coir</Tab>
        <Tab>Organic Decore</Tab>
      </TabList>

      {/* TabPanel contains the content for each tab */}
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
      <TabPanel>
        <ProductShowCase></ProductShowCase>
      </TabPanel>
    </Tabs>
  );
};

export default Products;
