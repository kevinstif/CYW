import {Component, OnInit} from '@angular/core';
import {Chart} from 'chart.js/auto'

@Component({
  selector: 'app-cases-graph',
  templateUrl: './cases-graph.component.html',
  styleUrls: ['./cases-graph.component.css']
})
export class CasesGraphComponent implements OnInit{

  public chart: Chart;

  ngOnInit() {

    const data = {
      labels: ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],
      datasets: [{
        label: 'Casos de Ciber Estafas Reportados',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: true,
        borderColor: 'rgb(63,124,172)',
        backgroundColor: 'rgb(109,165,210)',
        tension: 0.1
      }]
    };

    this.chart = new Chart("chart",{
      type: "line",
      data: data
    })
  }

}
