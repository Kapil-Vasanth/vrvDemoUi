export function decodeJWT(token) {

    const parts = token.split(".");
  
    if (parts.length !== 3) {
  
      return null; // Invalid token format
  
    }
  
    const payload = parts[1]; // Access the payload
  
    const decodedPayload = atob(payload.replace(/-/g, "+").replace(/_/g, "/")); 
  
    return JSON.parse(decodedPayload); 
  
  }
  

  