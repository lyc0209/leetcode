/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function(queryIP) {
  const resultMap = { ipv4: "IPv4", ipv6: "IPv6" }
  const rep1 = /^(((\d)|([1-9]\d)|1[0-9][0-9]|2[0-5][0-5])\.){3}((\d)|([1-9]\d)|1[0-9][0-9]|2[0-5][0-5])$/
  const isIpv4 = rep1.test(queryIP)

  const rep2 = /^([\da-fA-F]{1,4}:{7})[0-9a-fA-F]$/
  // const rep2 = /^(([\da-fA-F]{1,4})($|(?!:$):)){8}$/
  const isIpv6 = rep2.test(queryIP)

  return isIpv6
};

// const ipv6 = "2001:db8:85a3:0:0:8A2E:0370:7334"
const ipv6 = "11:22:33:44:55:66:77:88"
const result = validIPAddress(ipv6)
console.log("result: ", result)