"use strict";

import { verifyParts } from "../src/js/verifyParts.js";

describe("Bahandi Gikan sa Pulong sa Diyos", () => {
  // Pakigpulong
  it("should return true if all parts are String", () => {
    // Arrange
    const parts = {
      "id" : "pk",
      "title" : "{{Ayawg Sundoga si Elipaz Dihang Maghatag ug Paghupay}}",
      "mins" : "10",
      "apportioned" : "Wyndell Graham"
    };

    // Act
    const result = verifyParts(parts);
    
    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any part is non-String", () => {
    // Arrange
    const parts = {
      "id" : "pk", 
      "title" : "{{Ayawg Sundoga si Elipaz Dihang Maghatag ug Paghupay}}",
      "mins" : 10,
      "apportioned" : "Wyndell Graham"
    }

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const parts = {
      "id" : "pk",
      "title" : "{{Ayawg Sundoga si Elipaz Dihang Maghatag ug Paghupay}}",
      "mins" : "10",
    }

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });

  // Espirituwal nga mga Bahandi
  it("should return true if all parts are String", () => {
    // Arrange
    const parts = {
      "id" : "eb",
      "mins" : "10",
      "chair" : "Donald Powter"
    };
    // Act
    const result = verifyParts(parts);
    
    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any part is non-String", () => {
    // Arrange
    const parts = {
      "id" : "eb",
      "mins" : 10,
      "chair" : "Donald Powter"
    };

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const parts = {
      "id" : "eb",
      "mins" : "10",
    }

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });
});

describe("Magmaepektibo sa Ministeryo", () => {
  // Video sa Unang Pakig-estorya ug Video sa Pagbalikduaw
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      "id": "vup",
      "title": "Video sa Unang Pakig-estorya", 
      "mins": "5"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any part is non-String", () => {
      // Arrange
      const part = {
        "id": "vup",
        "title": "Video sa Unang Pakig-estorya", 
        "mins": 5
      };
  
      // Act
      const result = verifyParts(part);
  
      // Assert
      expect(result).toBe(false);
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      "id": "vup",
      "title": "Video sa Unang Pakig-estorya"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);  
  });

  // Unang Pakig-estorya, Pagbalikduaw, ug Pagtuon sa Bibliya
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      "id": "up",
      "title": "A title",
      "mins": "10",
      "student": "Anna Jane Marmalade",
      "assistant" : "Mary Quiltspin"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any part is non-String", () => {
    // Arrange
    const part = {
      "id": "pd",
      "title": "Pagbalikduaw",
      "mins": false,
      "student": "Anna Jane Marmalade",
      "assistant" : "Mary Quiltspin"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      "id": "pd",
      "student": "Anna Jane Marmalade",
      "assistant" : "Mary Quiltspin"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });

  // Pakigpulong (Estudyante)
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      "id": "pke",
      "title": "Dasiga ang Study nga Makighigala sa mga Igsoon",
      "mins": "5",
      "student": "Anthony Woods"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if any part is non-String", () => {
    // Arrange
    const part = {
      "id": "pke",
      "title": "Dasiga ang Study nga Makighigala sa mga Igsoon",
      "mins": "5",
      "student": false
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      "id": "pke",
      "title": "Dasiga ang Study nga Makighigala sa mga Igsoon",
      "student": "Anthony Woods"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });
});

// Kristohanong Pagkinabuhi
describe("Kristohanong Pagkinabuhi", () => {
  // Update sa Nagamandong Lawas, ug Mga Nalampos sa Organisasyon
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      id: "unl",
      title: "Update sa Nagamandong Lawas #7",
      mins: "15"  
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if all parts are non-String", () => {
    // Arrange
    const part = {
      id: "unl",
      title: "Update sa Nagamandong Lawas #7",
      mins: 10
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false); 
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      id: "unl",
      mins: "15"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });

  // Lokal nga Panginahanglan, Pakighisgot, Pakighisgot nga Naay Video, ug Mahimong Higala ni Jehova
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      "id" : "lp",
      "title" : "Lokal nga Panginahanglan",
      "mins" : "15",
      "chair" : "Rowan Bubblezoo"
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if all parts are non-String", () => {
    // Arrange
    const part = {
      "id" : "lp",
      "title" : "Lokal nga Panginahanglan",
      "mins" : "15",
      "chair" : null
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false); 
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      "id" : "lp",
      "mins" : "15",
      "chair" : "Rowan Bubblezoo"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });

  // Pagtuon sa Kongregasyon sa Bibliya
  it("should return true if all parts are String", () => {
    // Arrange
    const part = {
      "id" : "pkb",
      "title" : "Pagtuon sa Kongregasyon sa Bibliya",
      "mins" : "30",
      "chair" : "Gregory Whitesleeve",
      "reader" : "Harry O' Connor"
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(true);
  });

  it("should return false if all parts are non-String", () => {
    // Arrange
    const part = {
      "id" : "pkb",
      "title" : "Pagtuon sa Kongregasyon sa Bibliya",
      "mins" : 30,
      "chair" : "Gregory Whitesleeve",
      "reader" : "Harry O' Connor"
    };
    
    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false); 
  });

  it("should return false if any part is missing", () => {
    // Arrange
    const part = {
      "id" : "pkb",
      "title" : "Pagtuon sa Kongregasyon sa Bibliya",
      "mins" : "30",
      "reader" : "Harry O' Connor"
    };

    // Act
    const result = verifyParts(part);

    // Assert
    expect(result).toBe(false);
  });
});

describe("Others", () => {
  it("should return false if any id is invalid", () => {
    // Arrange
    const parts = {
      "id" : "ebc",
      "mins" : "10",
      "chair" : "Donald Powter"
    };

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });

  it("should return false if any id is missing", () => {
    // Arrange
    const parts = {
      "mins" : "10",
      "chair" : "Alansky Gregory Blythe"
    };

    // Act
    const result = verifyParts(parts);

    // Assert
    expect(result).toBe(false);
  });
});