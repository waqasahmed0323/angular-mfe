import { Component, Inject } from '@angular/core';
import { SafePipe } from '../Pipes/safe.pipe';
import { DOCUMENT } from '@angular/common';
@Component({
  selector: 'app-report',
  standalone: true,
  imports: [SafePipe],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css',
})
export class ReportComponent {
  currentReportUrl: string = '';
  constructor(@Inject(DOCUMENT) private document: Document) {}
  showReport(reportNumber: number): void {
    const baseUrl = this.document.location.origin;
    this.currentReportUrl = `${baseUrl}/assets/reports/report${reportNumber}.pdf`;
  }
}
