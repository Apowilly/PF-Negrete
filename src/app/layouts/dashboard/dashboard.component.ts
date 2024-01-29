import { Component } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';


interface FoodNode {
  name: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'Mis Cursos',
    children: [
      { name: 'Matemáticas' },
      { name: 'Ciencias Políticas' },
      { name: 'Tecnología 1' },
    ],
  },
  {
    name: 'Horarios de Clases',
    children: [
      { name: 'Clases Diurnas' },
      { name: 'Clases Vespertinas' },
      { name: 'Clases Online' },
    ],
  },
  {
    name: 'Tutorias por Alumnos',
    children: [
      { name: 'Matemáticas' },
      { name: 'Ciencias Políticas' },
      { name: 'Tecnología 1' },
    ],
  },
  {
    name: 'Biblioteca',
    children: [
      { name: 'Agendar tu hora' },
      { name: 'Libros Virtuales' },
      { name: 'Memorias de Alumnos Antiguos' },
    ],
  },
  {
    name: 'Administración',
    children: [
      {
        name: 'Cursos',
        
      },
      {
        name: 'Inscripciones',
        
      },
      {
        name: 'Certificados',
        children: [
          { name: 'Alumno Regular' },
          { name: 'Pase Escolar' },
        ],
      },
    ],
  },
];


interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  showFiller = false;

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

}

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

