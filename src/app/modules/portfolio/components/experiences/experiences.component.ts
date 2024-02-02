import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Desenvolvedor Mobile",
        p: "ENG Soluções Técnologicas | Jul 2022 - Jul 2023"
      },
      text: "Durante este período, desenvolvi diversos sistemas mobile utilizando o framework Flutter. Estes aplicativos se destacavam pois além dos requisitos padrões de sistemas, todos possuiam uma integração com um dispositivo IoT sendo eles sistemas de segurança, balança de gado e sensores."
    },
    {
      summary: {
        strong: "Estagiário de TI",
        p: "EOS Consultores | Mai 2021 - Ago 2021"
      },
      text: "Como estagiário de TI, tive contato com diversas áreas do desenvolvimento de Software porém atuando principalmente na escrita de Scripts SQL para manutenção do banco de dados e desenvolvimento de sistemas Front-End e Mobile com C#"
    }
  ]);
}
