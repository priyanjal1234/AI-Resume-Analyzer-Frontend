import api from "./api";

class ResumeService {
  constructor() {
    this.api = api;
    this.baseUrl = "http://localhost:3000";
  }

  async uploadResume(resumeData) {
    try {
      return await this.api.post(
        `${this.baseUrl}/api/upload-resume`,
        resumeData,
        { withCredentials: true }
      );
    } catch (error) {
      throw error;
    }
  }
}

let resumeService = new ResumeService();

export default resumeService;
