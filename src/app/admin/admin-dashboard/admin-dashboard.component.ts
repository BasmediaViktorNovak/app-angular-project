import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {UserData} from '../../model-clasess/user-data';
import {WeatherService} from '../../services/weather-service/weather.service';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements AfterViewInit {
  displayedColumns: string[] = ['iat', 'exp', 'password', 'username', 'role'];

  dataSource: MatTableDataSource<UserData> = new MatTableDataSource<UserData>();
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private weatherService: WeatherService) {

  }

  ngAfterViewInit(): void {
    this.weatherService.arrayUserDataSubj.subscribe(items => {
      this.dataSource.data = items;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }
}
