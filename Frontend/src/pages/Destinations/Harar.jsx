// src/pages/Destinations/Harar.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function HararPage() {
  return <DestinationDetailLayout destination={destinationsData.harar} />;
}
