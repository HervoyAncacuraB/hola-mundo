// resume.service.ts
import { Injectable } from '@angular/core';
import { Resume } from '../resume/resume.interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  mockResume: Resume = {
    name: 'Hervoy Ancacura',
    position: 'Senior Software Engineer',
    email: 'hervoy.ancacura@gmail.com ',
    phone: '+569 983623486',
    website: 'www.cofebreak.com',
    location: 'La Florida, Santiago, Chile',
    summary: 'Desarrollador Java Backend con experiencia en el desarrollo de soluciones para el sector bancario, e-commerce y salud. Especializado en Spring Framework y su ecosistema, con un enfoque sólido en microservicios, APIs REST, seguridad con Spring Security y pruebas unitarias. Experiencia en arquitecturas escalables y optimización del rendimiento, trabajando con metodologías ágiles (Scrum) en entornos colaborativos.',
    habilidadesTecnicas: {
      lenguajes: [
        "Java (8, 11, 17)",
        "Angular"
      ],
      frameworks: [
        "Spring Boot",
        "Spring Security",
        "Spring MVC",
        "Spring Cloud",
        "Hibernate",
        "JPA"
      ],
      basesDeDatos: [
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Oracle PL/SQL"
      ],
      apis: [
        "RESTful",
        "OpenAPI",
        "Swagger",
        "OAuth2",
        "JWT"
      ],
      testing: [
        "JUnit",
        "Mockito",
        "Cucumber",
        "SonarQube"
      ],
      devOpsCloud: [
        "AWS (S3, EC2, CloudWatch)",
        "Docker",
        "Kubernetes",
        "CI/CD con Jenkins"
      ],
      herramientas: [
        "GitHub",
        "GitLab",
        "Bitbucket",
        "Jira",
        "Confluence",
        "IntelliJ IDEA",
        "Eclipse"
      ]
    },
    experience: [
      { company: 'Globant ', role: 'Desarrollador Java Backend ', years: '09/2022 - 02/2024' ,
        description: 'Desarrollo de una App Mobile con arquitectura SOA y microservicios con Spring Boot.\n' +
          'Implementación de APIs REST con Swagger y OpenAPI.\n' +
          'Aplicación de Spring Security para autenticación y autorización.\n' +
          'Manejo de bases de datos MongoDB, PostgreSQL, JPA Hibernate.\n' +
          'Integración con AWS (S3, EC2, CloudWatch).\n' +
          'Contenedorización con Docker y Kubernetes.\n' +
          'Monitoreo con Prometheus y Grafana.'},
      { company: 'SoftDev', role: 'Frontend Developer', years: '2019 - 2021' ,
        description:'Desarrollo de soluciones personalizadas para PYMES.\n' +
          'Creación de APIs seguras con Spring Security y OAuth2.\n' +
          'Implementación de pruebas unitarias y de integración con JUnit y Mockito.\n' +
          'Uso de Spring Boot, MySQL, PostgreSQL.\n'},
      { company: 'SoftDev', role: 'Frontend Developer', years: '2019 - 2021' ,
        description:'Desarrollo de soluciones personalizadas para PYMES.\n' +
          'Creación de APIs seguras con Spring Security y OAuth2.\n' +
          'Implementación de pruebas unitarias y de integración con JUnit y Mockito.\n' +
          'Uso de Spring Boot, MySQL, PostgreSQL.\n'}
    ]
  };

  getResume(): Observable<Resume> {
    return of(this.mockResume);
  }
}
