// src/pages/Destinations/Axum.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function AxumPage() {
  return <DestinationDetailLayout destination={destinationsData.axum} />;
}
