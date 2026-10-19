// src/pages/Destinations/Gondar.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function GondarPage() {
  return <DestinationDetailLayout destination={destinationsData.gondar} />;
}