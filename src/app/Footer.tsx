import React from "react";

export default function Footer() {
  return (
    <footer className="grid grid-cols-3 bg-gray-100 mt-6 p-6">
      <div>
        <h3 className="font-bold mb-3">À propos</h3>
        <ul>
          <li>Fonctionnement du site</li>
          <li>Conditions générales</li>
          <li>Données et confidentialité</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-3">Nos hébergements</h3>
        <ul>
            <li>Charte qualité</li>
            <li>Proposer votre hôtel</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold mb-3">Assistance</h3>
        <ul>
            <li>Centre d&apos;aide</li>
            <li>Nous contacter</li>
        </ul>
      </div>
    </footer>
  );
}
