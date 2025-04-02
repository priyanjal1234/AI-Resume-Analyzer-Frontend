import api from "./api";

class ResumeService {
  constructor() {
    this.api = api;
    this.baseUrl = "https://ai-resume-analyser-backend.onrender.com";
  }

  async getFeedback(resumeData) {
    try {
      return await this.api.post(
        `${this.baseUrl}/api/get-feedback`,
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
