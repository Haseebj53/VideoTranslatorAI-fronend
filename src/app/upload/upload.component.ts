import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { logout } from '../store/login.actions';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  selectedFile: File | null = null;
  videoName: string = '';
  constructor(private http: HttpClient, private router: Router, private authService: AuthService, private store: Store) { }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
logout(){
  this.store.dispatch(logout());
  this.router.navigate(['/login'])
}
  onUpload() {
    if (!this.selectedFile) {
      console.error('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('video', this.selectedFile);
    formData.append('videoName', this.videoName);

    this.http.post<any>('http://localhost:3000/upload', formData).subscribe(
      response => {
        console.log('File uploaded successfully:', response);
        const videoUrl = response.videoUrl; 
        const videoName = response.videoName; 
        const videoSize = response.size;
        const fileName = response.filename;
        this.router.navigate(['/video-player'], { queryParams: { videoUrl,videoName, videoSize, fileName } });
      },
      error => {
        console.error('Error uploading file:', error);
      }
    );
  }
}
