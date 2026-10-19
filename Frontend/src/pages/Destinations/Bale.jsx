// src/pages/Destinations/Bale.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function BaleMountains() {
  return <DestinationDetailLayout destination={destinationsData.bale} />;
}
