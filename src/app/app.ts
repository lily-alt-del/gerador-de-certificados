import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBar } from "./components/nav-bar/nav-bar";
import { PrimaryButton } from "./components/primary-button/primary-button";
import { CommonModule } from '@angular/common';
import { SecondaryButton } from "./components/secondary-button/secondary-button";
import { ItemCertificado } from './components/item-certificado/item-certificado';
import { BaseUi } from "./components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";
import { CertificadoForm } from "./pages/certificado-form/certificado-form";
import { Certificado } from "./pages/certificado/certificado";

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, NavBar, PrimaryButton, CommonModule, SecondaryButton, ItemCertificado, BaseUi, Certificados, CertificadoForm, Certificado],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto');
  exibeNavbar: boolean = true;
}
