// src/pages/Destinations/Semen.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function SemenPage() {
  return <DestinationDetailLayout destination={destinationsData.semenMountains} />;
}
