import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {
  videoUrl: string | null = null;
  videoName: any | null = null;
  originalName: any | null = null;

  size: any | null = null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const navigation = this.route.snapshot;
    if (navigation.data && navigation.data['response']) {
      // this.response = navigation.data['response'];
      // this.videoUrl = this.response.videoUrl;
    }
    this.route.queryParams.subscribe(params => {
      this.videoUrl = params['videoUrl'];
      this.videoName = params['videoName'];
      this.originalName = params['fileName'];

      this.size = params['videoSize'];
      this.size = (this.size / (1024 * 1024)).toFixed(2)
    });
  }
}