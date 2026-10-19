// src/pages/Destinations/Bahirdar.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function BahirDarPage() {
  return <DestinationDetailLayout destination={destinationsData.bahirdar} />;
}
