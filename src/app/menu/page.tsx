"use client";

import React from "react";
import { useEffect, useState } from "react";
import Bar from "../components/Bar";
import './menu.css'

export default function Estadistica() {
  
  return (
    <section className="Container">
      <div className="bar-1">
        <Bar/>
      </div>
      <div className="Main-Second">
      
        <div className="Contenedor-Clientes">
          <div className="Grafica-Contenedor">
            
          </div>
        </div>
        <div className="Contenedor-Envios">
          <div className="Grafica-Contenedor">
          </div>
        </div>
      </div>
    </section>
  );
}
