// src/pages/Destinations/DebreDamo.jsx
import React from 'react';
import DestinationDetailLayout from '../../Components/DestinationDetailLayout';
import { destinationsData } from '../../data/destinationsData';

export default function DebreDamoPage() {
  return <DestinationDetailLayout destination={destinationsData.debreDamo} />;
}
