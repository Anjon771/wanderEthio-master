// src/pages/Destinations/Lalibela.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function LalibelaPage() {
  return <DestinationDetailLayout destination={destinationsData.lalibela} />;
}
