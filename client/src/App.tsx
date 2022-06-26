import React from 'react';
import logo from './logo.svg';
import './App.css';
import { XamlParser } from './services/XamlParser';
import { ActivityMetadata } from './services/ActivityMetadataService';
import { Sequence } from './activities/Sequence';

function App() {

  ActivityMetadata.register("sequence", Sequence.prototype);

  const doc = `<Activity x:TypeArguments="x:Int32" xmlns="http://schemas.microsoft.com/netfx/2009/xaml/activities" xmlns:x="http://schemas.microsoft.com/winfx/2006/xaml"><x:Members><x:Property Name="var1" Type="InArgument(x:Int32)" /></x:Members><Sequence><Assign x:TypeArguments="x:Int32" Value="[Operand + 2]"><Assign.To><OutArgument x:TypeArguments="x:Int32"><ArgumentReference x:TypeArguments="x:Int32" ArgumentName="Result" /></OutArgument></Assign.To></Assign></Sequence></Activity>`;

  XamlParser.parse(doc);

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
