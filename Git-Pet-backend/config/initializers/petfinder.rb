Petfinder.configure do |config|
    config.api_key = "YPMPDUpeG9YxDycadyse6GPbfLsbHisj4p2MtArjcvLFYIVxxX"
    
  end
  
  # petfinder = Petfinder::Client.new

  petfinder = Petfinder::Client.new('YPMPDUpeG9YxDycadyse6GPbfLsbHisj4p2MtArjcvLFYIVxxX', 'pSmlV25RHJjMne45dDTQsHaL4UiPt8goyQ4ggDMN')


  # curl -d "grant_type=client_credentials&client_id=YPMPDUpeG9YxDycadyse6GPbfLsbHisj4p2MtArjcvLFYIVxxX&client_secret=pSmlV25RHJjMne45dDTQsHaL4UiPt8goyQ4ggDMN" https://api.petfinder.com/v2/oauth2/token
