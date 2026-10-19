// src/pages/Destinations/AddissAbaba.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function AddisAbabaPage() {
  return <DestinationDetailLayout destination={destinationsData.addisAbaba} />;
}
