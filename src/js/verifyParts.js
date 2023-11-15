"use strict";

/**
* Verifies different parts of the data structure.
* @param {Object} part 
* @returns {boolean} 
*/
export function verifyParts(part){
  const verifiedString = isString(part);

  // Bahandi Gikan sa Pulong sa Diyos
  if (["pk", "eb", "pb"].includes(part.id)) {
    if (verifiedString !== false) {
      // Pakigpulong
      if (part.id === "pk" && part.title && part.mins && part.apportioned) return true;

      // Espirituwal nga mga Bahandi
      if (part.id === "eb" && part.mins && part.chair) return true;

      // Pagbasa sa Bibliya
      if (part.id === "pb" && part.mins && part.apportioned) return true;
    }
  }

  // Magmaepektibo sa Ministeryo
  if (["vup", "vpd", "up", "pd", "psb", "pke"].includes(part.id)) {
    if (verifiedString !== false) {
      // Video sa Unang Pakig-estorya ug Video sa Pagbalikduaw
      if (["vup", "vpd"].includes(part.id) && part.title && part.mins) return true;
      
      // Unang Pakig-estorya, Pagbalikduaw, ug Pagtuon sa Bibliya
      if (["up", "pd", "psb"].includes(part.id) && part.title && part.mins && part.student && part.assistant) return true;
      
      // Pakigpulong (Estudyante)
      if (part.id === "pke" && part.title && part.mins && part.student) return true;
    }
  }

  // Kristohanong Pagkinabuhi
  if (["unl", "mno", "lp", "p", "pv", "mhj", "pkb"].includes(part.id)) {
    if (verifiedString !== false) {
      // Update sa Nagamandong Lawas, ug Mga Nalampos sa Organisasyon
      if (["unl", "mno"].includes(part.id) && part.mins && part.title) return true;

      // Lokal nga Panginahanglan, Pakighisgot, Pakighisgot nga Naay Video, ug Mahimong Higala ni Jehova
      if (["lp", "p", "pv", "mhj"].includes(part.id) && part.chair && part.mins && part.title) return true;

      // Pagtuon sa Kongregasyon sa Bibliya
      if (part.id === "pkb" && part.chair && part.reader && part.mins && part.title) return true;
    }
  }

  return false;
}

/**
* Checks if all properties in the object are strings.
* @param {Object} part 
* @returns {boolean} 
*/
function isString(part){
  for (const property in part) {
    if (typeof part[property] !== "string") return false;
  }
  return true;
}