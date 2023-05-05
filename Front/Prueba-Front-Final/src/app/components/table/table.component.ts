import { Component } from '@angular/core';
import snk from 'src/assets/json/snk.json';

interface TableData {
  username: string;
  subject: string;
  customerSatisfaction: number;
  priority: string;
  status: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  jsonData: any = snk;
  items: TableData[] = [];

  //Constructor de clase y extraccion de datos de archivo Json
  constructor() {
    this.items = this.jsonData.map((item: any) => {
        return {
            username: item.username,
            subject: item.subject,
            customerSatisfaction: item.customerSatisfaction,
            priority: item.priority,
            status: item.status
        };
    });
    this.filteredItems = this.items; 
  }

  filteredItems: TableData[] = [];

  // Funcion de filtrado

  filterData(value: string, field: string) {
    this.filteredItems = this.filteredItems.filter((item) => {
      if (value === '' || value === null) {
        return true;
      } else if (field === 'username') {
        return item.username.toLowerCase().includes(value.toLowerCase());
      } else if (field === 'priority') {
        return item.priority.toLowerCase() === value.toLowerCase();
      } else if (field === 'status') {
        return item.status.toLowerCase() === value.toLowerCase();
      } else if (field === 'customerSatisfaction') {
        return item.customerSatisfaction.toString() === value;
      } else if (field === 'subject') {
        return item.subject.toLowerCase().includes(value.toLowerCase());
      }
      return false;
    });
  
  
  
    this.showTable();
  }

  priorityOptions = ['All', 'Low', 'Medium', 'High'];
  statusOptions = ['All', 'Pending', 'In Progress', 'Completed'];
  customerSatisfactionOptions = ['All', 1, 2, 3, 4, 5];
  selectedPriority = 'All';
  selectedStatus = 'All';
  selectedCustomerSatisfaction = 'All';

  //Reseteo de filtros, muestra la tabla en su valor inicial
  resetFilters() {
    this.filteredItems = this.items;
    this.selectedPriority = 'All';
    this.selectedStatus = 'All';
    this.selectedCustomerSatisfaction = 'All';
    this.priorityOptions = ['All', 'Low', 'Medium', 'High'];
    this.statusOptions = ['All', 'Pending', 'In Progress', 'Completed'];
    this.customerSatisfactionOptions = ['All', 1, 2, 3, 4, 5];
  }
  // Funcion para mostrar tabla
  showTable() {
  }
}












// filteredItems: TableData[] = [];

// filterData(value: string, field: string) {
//   this.filteredItems = this.filteredItems.filter((item) => {
//     if (value === '' || value === null) {
//       return true;
//     } else if (field === 'username') {
//       return item.username.toLowerCase().includes(value.toLowerCase());
//     } else if (field === 'priority') {
//       return item.priority.toLowerCase() === value.toLowerCase();
//     } else if (field === 'status') {
//       return item.status.toLowerCase() === value.toLowerCase();
//     } 
//     return false;
//   });
// }
// }


// filterData(event: any, field: string) {
//   const value = event?.target?.value ?? '';
//   this.filteredItems = this.items.filter((item) => 
//   {
//     if (value === '' || value === null) {
//       return true;
//     } else if (field === 'username') {
//       return item.username.toLowerCase().includes(value.toLowerCase());
//     } else if (field === 'priority') {
//       return item.priority.toLowerCase() === value.toLowerCase();
//     } 
//     });
//   }
// }
