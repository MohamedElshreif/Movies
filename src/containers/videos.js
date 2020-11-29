import React from 'react';
import Videos from '../components/videos';

export default function VideosContianer({ ...restProps }) {
  return (
    <Videos {...restProps}>
      <Videos.Content>
        <Videos.Item>
          <Videos.Image src='./images/video-1.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
        <Videos.Item>
          <Videos.Image src='./images/video-2.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
        <Videos.Item>
          <Videos.Image src='./images/video-3.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
        <Videos.Item>
          <Videos.Image src='./images/video-1.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
        <Videos.Item>
          <Videos.Image src='./images/video-2.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
        <Videos.Item>
          <Videos.Image src='./images/video-3.jpg' />
          <Videos.Title>
            UNHINGED - Official Trailer Starring Russell Crowe (HD)
          </Videos.Title>
          <Videos.Text>Trailer</Videos.Text>
        </Videos.Item>
      </Videos.Content>
    </Videos>
  );
}
