"use client";

import React from "react";
import { useEffect, useState } from "react";
import Bar from "../components/Bar";
import './menu.css'
import CSSCustomization from "../components/GraficaT";
import Inventario from "../components/detalles";
import crearPublicacion from "../components/detalles";


export default function Estadistica() {
  
  return (
    <section className="Container">
      <div className="bar-1">
        <Bar/>
      </div>
      <div className="Main-Second">

        <div className="Contenedor-Clientes">
          <div className="Grafica-Contenedor">
              <div className="AñadirStacion">
                  
              </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}
